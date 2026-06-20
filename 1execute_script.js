(function() {
    // Create the overlay container
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '9999',
        color: '#ff0000',
        fontFamily: 'monospace',
        border: '10px double #ff0000',
        boxSizing: 'border-box'
    });

    // Add the UI elements
    overlay.innerHTML = `
        <div style="font-size: 14px; letter-spacing: 2px; margin-bottom: 10px;">[ UMBRELLA CORP INTERNAL NETWORK ]</div>
        <h1 style="font-size: 40px; margin: 0; text-shadow: 0 0 15px #ff0000;">PROTOCOL: SITE PURGE</h1>
        <div id="countdown-timer" style="font-size: 120px; font-weight: bold; margin: 20px 0;">10</div>
        <div id="status-log" style="font-size: 12px; color: #888;">INITIALIZING SECURITY OVERRIDE...</div>
        <div style="margin-top: 40px; font-size: 12px; letter-spacing: 3px; opacity: 0.7;">"Our Business Is Life Itself"</div>
    `;

    document.body.appendChild(overlay);

    let timeLeft = 10;
    const logLines = [
        "Accessing encrypted sectors...",
        "Bypassing firewall nodes...",
        "Authorizing Alpha-1 protocols...",
        "Establishing secure link...",
        "Finalizing containment..."
    ];

    const timerInterval = setInterval(() => {
        timeLeft--;
        const timerElement = document.getElementById('countdown-timer');
        const logElement = document.getElementById('status-log');
        
        if (timerElement) timerElement.innerText = timeLeft;
        if (logElement) logElement.innerText = logLines[Math.floor(Math.random() * logLines.length)];

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            overlay.innerHTML = `
                <h1 style="font-size: 60px; color: #fff; background: #ff0000; padding: 20px;">TERMINATED</h1>
                <p style="margin-top: 20px; letter-spacing: 1px;">CONNECTION LOST: U-CORP HIVE OFFLINE</p>
            `;
            
            // Optional: Remove the overlay after a short delay
            setTimeout(() => {
                overlay.remove();
            }, 3000);
        }
    }, 1000);
})();
