function redirectWithDelay(url, delay_in_ms) {
    setTimeout(() => {
        window.location.href = url;
    }, delay_in_ms);
}
