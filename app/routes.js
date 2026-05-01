//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/how-are-you-finding-sixth-form-or-college', (req, res) => {
  res.redirect('/how-are-you-finding-sixth-form-or-college')
})

router.post('/what-do-you-need-to-do', (req, res) => {
  res.redirect('/what-do-you-need-to-do')
})

router.post('/where-are-you-at-with-college-or-sixth-form', (req, res) => {
  res.redirect('/where-are-you-at-with-college-or-sixth-form')
})

router.post('/which-parts-of-college-do-you-need-help-with', (req, res) => {
  res.redirect('/which-parts-of-college-do-you-need-help-with')
})

router.post('/check-your-answers', (req, res) => {
  res.redirect('/check-your-answers')
})
