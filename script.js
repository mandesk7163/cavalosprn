document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '.exemplo.py';
    link.download = '.exemplo.py';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
