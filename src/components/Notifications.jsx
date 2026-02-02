import { useState, useCallback } from 'react';
import './Notifications.css';

let notificationId = 0;

function Notifications({ notifications, onDismiss }) {
    return (
        <div className="notifications-container">
            {notifications.map(notification => (
                <div
                    key={notification.id}
                    className={`notification ${notification.type} ${notification.exiting ? 'exiting' : ''}`}
                >
                    <span className="notification-icon">
                        {notification.type === 'success' ? '✓' : notification.type === 'error' ? '✕' : 'ℹ'}
                    </span>
                    <span className="notification-message">{notification.message}</span>
                    <button
                        className="notification-close"
                        onClick={() => onDismiss(notification.id)}
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
}

export function useNotifications() {
    const [notifications, setNotifications] = useState([]);

    const addNotification = useCallback((message, type = 'success') => {
        const id = ++notificationId;

        setNotifications(prev => [...prev, { id, message, type, exiting: false }]);

        // Start exit animation after 2.5s
        setTimeout(() => {
            setNotifications(prev =>
                prev.map(n => n.id === id ? { ...n, exiting: true } : n)
            );
        }, 2500);

        // Remove after 3s (2.5s display + 0.5s fade)
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, 3000);

        return id;
    }, []);

    const dismissNotification = useCallback((id) => {
        setNotifications(prev =>
            prev.map(n => n.id === id ? { ...n, exiting: true } : n)
        );
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        }, 300);
    }, []);

    return { notifications, addNotification, dismissNotification };
}

export default Notifications;
