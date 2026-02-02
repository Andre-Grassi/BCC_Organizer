import { BASIC_FORMATION_COURSES } from '../data/courses';

/**
 * Check if all barrier courses (semesters 1-3) are completed in their original or earlier semesters
 */
export const isBarrierSatisfied = (courses, targetSemester) => {
    if (targetSemester <= 3) return true; // No barrier for basic formation

    // All basic formation courses must be in semesters 1-3
    for (const code of BASIC_FORMATION_COURSES) {
        const course = courses[code];
        if (!course || course.semester > 3) {
            return false;
        }
    }
    return true;
};

/**
 * Check if a course can be moved to a target semester
 */
export const canMoveTo = (courseCode, targetSemester, courses) => {
    const course = courses[courseCode];
    if (!course) return { valid: false, reason: 'Disciplina não encontrada' };

    // Cannot move to semester 0 or less
    if (targetSemester < 1) {
        return { valid: false, reason: 'Semestre inválido' };
    }

    // Check prerequisites
    for (const prereq of course.prerequisites) {
        if (prereq === 'BARRIER') {
            // Check if all basic formation is complete
            if (targetSemester <= 3) {
                return { valid: false, reason: 'Esta disciplina requer a conclusão de toda a formação básica (semestres 1-3)' };
            }

            // Check if any basic course is not in semesters 1-3
            for (const basicCode of BASIC_FORMATION_COURSES) {
                const basicCourse = courses[basicCode];
                if (basicCourse && basicCourse.semester > 3) {
                    return { valid: false, reason: `A barreira ainda não foi satisfeita. ${basicCode} está no semestre ${basicCourse.semester}` };
                }
            }
        } else {
            // Regular prerequisite - must be in an earlier semester
            const prereqCourse = courses[prereq];
            if (!prereqCourse) {
                return { valid: false, reason: `Pré-requisito ${prereq} não encontrado` };
            }
            if (prereqCourse.semester >= targetSemester) {
                return {
                    valid: false,
                    reason: `Pré-requisito ${prereq} (semestre ${prereqCourse.semester}) deve ser feito antes desta disciplina`
                };
            }
        }
    }

    // Check dependent courses - no course that depends on this one should be in an earlier semester
    const dependentIssues = getDependentCourses(courseCode, courses)
        .filter(dep => courses[dep].semester <= targetSemester);

    if (dependentIssues.length > 0) {
        return {
            valid: false,
            reason: `Disciplinas dependentes ${dependentIssues.join(', ')} estão em semestres anteriores ou iguais`
        };
    }

    return { valid: true, reason: '' };
};

/**
 * Get all courses that depend on a given course
 */
export const getDependentCourses = (courseCode, courses) => {
    return Object.keys(courses).filter(code => {
        const course = courses[code];
        return course.prerequisites.includes(courseCode);
    });
};

/**
 * Validate entire course arrangement
 */
export const validateArrangement = (courses) => {
    const errors = [];

    Object.entries(courses).forEach(([code, course]) => {
        const result = canMoveTo(code, course.semester, courses);
        if (!result.valid) {
            errors.push({ code, ...result });
        }
    });

    return errors;
};
