module.exports = async function (context, req) {
    context.res = {
        body: req,
        headers: {'Content-Disposition':'attachment; filename="test.xlsx"'}
    };
}
