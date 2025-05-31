document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '.stopware.py';
    link.download = '.stopware.py';
    link.click();
});
