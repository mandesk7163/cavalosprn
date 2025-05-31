document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '.stopware';
    link.download = '.stopware';
    link.click();
});