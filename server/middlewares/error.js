const notFound = (req, res) => res.status(404).json({
    status: 'error',
    message: 'Route does not exist !'
});

export default notFound;