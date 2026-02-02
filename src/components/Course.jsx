import { CATEGORY_COLORS } from '../data/courses';
import { Draggable } from '@hello-pangea/dnd';
import './Course.css';

function Course({ course, index, isDragDisabled }) {
    const backgroundColor = CATEGORY_COLORS[course.category] || '#e0e0e0';

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
                    className={`course ${snapshot.isDragging ? 'dragging' : ''} ${course.isPlaceholder ? 'placeholder' : ''}`}
                    style={{
                        ...provided.draggableProps.style,
                        backgroundColor,
                    }}
                >
                    <span className="course-code">{course.code}</span>
                    <span className="course-name">{course.name}</span>
                </div>
            )}
        </Draggable>
    );
}

export default Course;
