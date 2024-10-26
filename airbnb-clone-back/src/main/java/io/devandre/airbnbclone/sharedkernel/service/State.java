package io.devandre.airbnbclone.sharedkernel.service;

/**
 * A generic class representing a state with a value, an error, and a status notification.
 *
 * @param <T> the type of the value
 * @param <V> the type of the error
 */
public class State<T, V> {
    private T value;
    private V error;
    private StatusNotification status;

    /**
     * Constructs a new State with the specified status, value, and error.
     *
     * @param status the status notification
     * @param value the value
     * @param error the error
     */
    public State(StatusNotification status, T value, V error) {
        this.value = value;
        this.error = error;
        this.status = status;
    }

    /**
     * Returns the value.
     *
     * @return the value
     */
    public T getValue() {
        return value;
    }

    /**
     * Sets the value.
     *
     * @param value the value to set
     */
    public void setValue(T value) {
        this.value = value;
    }

    /**
     * Returns the error.
     *
     * @return the error
     */
    public V getError() {
        return error;
    }

    /**
     * Sets the error.
     *
     * @param error the error to set
     */
    public void setError(V error) {
        this.error = error;
    }

    /**
     * Returns the status notification.
     *
     * @return the status notification
     */
    public StatusNotification getStatus() {
        return status;
    }

    /**
     * Sets the status notification.
     *
     * @param status the status notification to set
     */
    public void setStatus(StatusNotification status) {
        this.status = status;
    }

    /**
     * Creates a new StateBuilder.
     *
     * @param <T> the type of the value
     * @param <V> the type of the error
     * @return a new StateBuilder
     */
    public static <T, V> StateBuilder<T, V> builder() {
        return new StateBuilder<>();
    }
}
