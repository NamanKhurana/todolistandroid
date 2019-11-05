const keys = require('../../config/keys')

module.exports = (survey) => {
    return `
    <html>
    <body>
    <div style = "text-align:center">
    <h3> Please give your valuable feedback for our service :) </h3>
    <p>${survey.body}</p>
    <div><a href = "${keys.redirectDomain}/api/surveys/${survey.id}/yes">YES</a></div>
    <div><a href = "${keys.redirectDomain}/api/surveys/${survey.id}/no">NO</a></div>
    </div>
    </body>
    </html>
    `
}