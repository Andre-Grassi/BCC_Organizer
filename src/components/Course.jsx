import { CATEGORY_COLORS } from '../data/courses';
import { Draggable } from '@hello-pangea/dnd';
import './Course.css';

function Course({ course, index, isDragDisabled, isCompleted, onToggleCompleted }) {
    const backgroundColor = CATEGORY_COLORS[course.category] || '#e0e0e0';

    const handleCheckboxClick = (e) => {
        e.stopPropagation(); // Prevent drag from starting
        onToggleCompleted(course.code);
    };

    return (
        <Draggable
            draggableId={course.code}
            index={index}
            isDragDisabled={isDragDisabled}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`course ${snapshot.isDragging ? 'dragging' : ''} ${course.isPlaceholder ? 'placeholder' : ''} ${isCompleted ? 'completed' : ''}`}
                    style={{
                        ...provided.draggableProps.style,
                        backgroundColor,
                    }}
                >
                    <input
                        type="checkbox"
                        className="course-checkbox"
                        checked={isCompleted}
                        onChange={handleCheckboxClick}
                        onClick={(e) => e.stopPropagation()}
                        title={isCompleted ? 'Marcar como não concluída' : 'Marcar como concluída'}
                    />
                    <span className="course-code">{course.code}</span>
                    <span className="course-name">{course.name}</span>
                </div>
            )}
        </Draggable>
    );
}

export default Course;
