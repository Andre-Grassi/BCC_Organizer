import { useState } from 'react';
import CourseGrid from './components/CourseGrid';
import { INITIAL_COURSES, CATEGORY_COLORS } from './data/courses';
import './App.css';

function App() {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [completedCourses, setCompletedCourses] = useState({});
  const [error, setError] = useState(null);

  const handleReset = () => {
    setCourses(INITIAL_COURSES);
    setCompletedCourses({});
    setError(null);
  };

  const handleToggleCompleted = (courseCode) => {
    setCompletedCourses(prev => ({
      ...prev,
      [courseCode]: !prev[courseCode]
    }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Organizador de Grade - BCC UFPR</h1>
        <p className="subtitle">Arraste as disciplinas para organizar sua grade. Marque as concluídas!</p>
        <button className="reset-btn" onClick={handleReset}>
          🔄 Resetar Grade
        </button>
      </header>

      {error && (
        <div className="error-toast">
          <span className="error-icon">⚠️</span>
          <span>{error}</span>
          <button className="error-close" onClick={() => setError(null)}>×</button>
        </div>
      )}

      <main className="app-main">
        <CourseGrid
          courses={courses}
          completedCourses={completedCourses}
          onCoursesChange={setCourses}
          onToggleCompleted={handleToggleCompleted}
          onError={setError}
        />
      </main>

      <footer className="app-footer">
        <div className="legend">
          <span className="legend-title">Legenda:</span>
          <div className="legend-items">
            <span className="legend-item" style={{ '--color': CATEGORY_COLORS.basic_ci }}>
              CI Básicas
            </span>
            <span className="legend-item" style={{ '--color': CATEGORY_COLORS.basic_cm }}>
              Matemática
            </span>
            <span className="legend-item" style={{ '--color': CATEGORY_COLORS.specific }}>
              Específicas
            </span>
            <span className="legend-item" style={{ '--color': CATEGORY_COLORS.tcc }}>
              TCC
            </span>
            <span className="legend-item" style={{ '--color': CATEGORY_COLORS.internship }}>
              Estágio
            </span>
            <span className="legend-item" style={{ '--color': CATEGORY_COLORS.optative }}>
              Optativas
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
