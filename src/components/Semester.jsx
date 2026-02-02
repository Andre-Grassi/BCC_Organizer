import { Droppable } from '@hello-pangea/dnd';
import Course from './Course';
import './Semester.css';

function Semester({ semester, courses, completedCourses, onToggleCompleted, isBarrier }) {
    return (
        <div className="semester">
            <div className="semester-header">
                <span className="semester-number">{semester}</span>
            </div>

            <Droppable droppableId={`semester-${semester}`}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`semester-courses ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                    >
                        {courses.map((course, index) => (
                            <Course
                                key={course.code}
                                course={course}
                                index={index}
                                isCompleted={!!completedCourses[course.code]}
                                onToggleCompleted={onToggleCompleted}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            {isBarrier && <div className="barrier-indicator">BARREIRA</div>}
        </div>
    );
}

export default Semester;

