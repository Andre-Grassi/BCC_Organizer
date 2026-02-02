import { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Semester from './Semester';
import { getCoursesBySemester } from '../data/courses';
import { canMoveTo } from '../utils/validation';
import './CourseGrid.css';

function CourseGrid({ courses, completedCourses, onCoursesChange, onToggleCompleted, onError }) {
    const [draggingCourse, setDraggingCourse] = useState(null);
    const semesterData = getCoursesBySemester(courses);

    // Get prerequisites of the currently dragged course
    const highlightedPrereqs = draggingCourse
        ? courses[draggingCourse]?.prerequisites.filter(p => p !== 'BARRIER') || []
        : [];

    const handleDragStart = (start) => {
        setDraggingCourse(start.draggableId);
    };

    const handleDragEnd = (result) => {
        setDraggingCourse(null);
        const { destination, source, draggableId } = result;

        // Dropped outside
        if (!destination) return;

        // Same position
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const targetSemester = parseInt(destination.droppableId.replace('semester-', ''));
        const sourceSemester = parseInt(source.droppableId.replace('semester-', ''));

        // Check if move is valid
        const validation = canMoveTo(draggableId, targetSemester, courses);

        if (!validation.valid) {
            onError(validation.reason);
            return;
        }

        // Update course semester
        const updatedCourses = {
            ...courses,
            [draggableId]: {
                ...courses[draggableId],
                semester: targetSemester,
            },
        };

        onCoursesChange(updatedCourses);
        onError(null); // Clear any previous error
    };

    return (
        <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="course-grid">
                <div className="semesters-container">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(semester => (
                        <Semester
                            key={semester}
                            semester={semester}
                            courses={semesterData[semester] || []}
                            completedCourses={completedCourses}
                            onToggleCompleted={onToggleCompleted}
                            isBarrier={semester === 3}
                            highlightedPrereqs={highlightedPrereqs}
                        />
                    ))}
                </div>
            </div>
        </DragDropContext>
    );
}

export default CourseGrid;
