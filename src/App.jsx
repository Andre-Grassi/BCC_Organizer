import { useState } from 'react';
import CourseGrid from './components/CourseGrid';
import Notifications, { useNotifications } from './components/Notifications';
import { INITIAL_COURSES, CATEGORY_COLORS } from './data/courses';
import './App.css';

const STORAGE_KEY = 'bcc-organizer-state';

function App() {
  const { notifications, addNotification, dismissNotification } = useNotifications();

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.courses || INITIAL_COURSES;
      } catch {
        return INITIAL_COURSES;
      }
    }
    return INITIAL_COURSES;
  });

  const [completedCourses, setCompletedCourses] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.completedCourses || {};
      } catch {
        return {};
      }
    }
    return {};
  });

  const [error, setError] = useState(null);

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      courses,
      completedCourses,
      savedAt: new Date().toISOString()
    }));
    addNotification('Grade salva com sucesso!', 'success');
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      '⚠️ Tem certeza que deseja resetar a grade?\n\nTodas as alterações serão perdidas!'
    );
    if (!confirmed) return;

    setCourses(INITIAL_COURSES);
    setCompletedCourses({});
    localStorage.removeItem(STORAGE_KEY);
    setError(null);
    addNotification('Grade resetada', 'info');
  };

  const handleToggleCompleted = (courseCode) => {
    setCompletedCourses(prev => ({
      ...prev,
      [courseCode]: !prev[courseCode]
    }));
  };

  return (
    <div className="app">
      <Notifications
        notifications={notifications}
        onDismiss={dismissNotification}
      />

      <header className="app-header">
        <h1>📚 Organizador de Grade - BCC UFPR</h1>
        <p className="subtitle">Arraste as disciplinas para organizar sua grade. Marque as concluídas!</p>
        <div className="header-buttons">
          <button className="save-btn" onClick={handleSave}>
            💾 Salvar
          </button>
          <button className="reset-btn" onClick={handleReset}>
            🔄 Resetar Grade
          </button>
        </div>
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
