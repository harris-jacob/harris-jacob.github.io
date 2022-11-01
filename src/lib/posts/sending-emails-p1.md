---
slug: sending-emails-p1
title: Sending emails from your code P1 - templates
date: 2022-10-25
excerpt: A fullstack example of reliably sending asynchronous emails in response to your business logic. This article covers the "frontend" i.e. the design generation of html email templates.
tags: [frontend, tutorial]
coverAlt: iphone mail app icon
---

<div style="padding-bottom:16px;" align="center">
  <img width="400" alt="me" src="/images/posts/sending-emails-p1.jpg"/>
</div>

Emails are an interesting problem. They are a requirement in almost every commercial application imaginable and they can be quite tricky to handle. Here's why:

1. They are asynchronous. In the the simplest case, we want to fire off emails after we perform parts of our business logic and process them in the background. In more complex systems they may be scheduled at various points in the future or even in response to timed user interactions. For example, if we are a booking company, we may want to schedule an email to remind a user on the day of their trip; or, if we are an e-commerce company, we may want to remind a user when there are un-purchased items in their basket after some period of inactivity. Solutions to these problem typically require some combination of queues and timers.

2. Email clients are bad. Most non-browser email clients do not support modern HTML and CSS (I'm looking at you outlook), but of course, we have to support as many clients as possible and provide a consistent user-experience. This is compounded when we consider that a large subset of our users will view emails on mobile devices or even tablets, which means our emails now have to be responsive and written in table ridden HTML.

3. The archaic SMTP. Sending emails requires an SMTP server. SMTP is how mail servers communicate. If you want to send your emails yourselves you'll have to setup and manage your own SMTP server. They can be setup fairly easily but getting popular email clients like gmail to consider your emails not spam, is hard. [Here is an article](https://medium.com/@stoyanov.veseline/self-hosting-a-mail-server-in-2019-6d29542dadd4) that discusses this particular problem. In general I wouldn't advise trying this, instead we rely on third party systems like SendGrid, MailJet or AWS SES to send our emails for us.

4. They are tangential to our business logic. While emails are often essential (customers get very worried when they purchase something from a company they've never heard of and don't receive any sort of email confirmation), they are not exactly core "business logic". We want them handled at the layer of our business logic but we want to do it in such a way that they don't intrude on the readability and performance of our business logic code.

I have seen some crazy email solutions, but they don't have to be difficult. I am going to outline some things I have learned implementing email workflows both from the "frontend" and "backend" perspective. For the exercise, I will pretend we are starting a business that allows users to signup to our service and begin a free 30 day trial. The finished code can be found [here](https://github.com/harris-jacob/toy-mailer).

## Building Emails

When they reach our customers, emails are nothing more than HTML with some inline CSS. There are a couple of caveats to keep in mind. Firstly, email clients do not support external style sheets, so you will need to do all of your styling inside your HTML file, additionally, lots of non-browser clients (this includes mobile clients) do not support modern CSS features like flexbox, grid, border-radiues and lots more (if you're interested you can go to [caniemail.com](https://www.caniemail.com/search/?s=border-radius) and see what is and isn't supported by various clients). Finally, there is outlook, the bane of every developer who has ever written an email's existence. It supports next to no expected CSS features so we find ourselves having to write "[ghost tables](https://stackoverflow.design/email/base/mso/)" to get our emails working correctly.

So, my advice to anyone who has never written a plain HTML email in their life, is DON'T. There exist several engines that allow us to write nice XML based email templates and handle the complexity of compiling them to nice email client friendly HTML. The best of these I have found is MJML. Its syntax is simple, the documentation is good and it supports components so common things like headers can be reused across emails. With MJML we can write neat, responsive and reusable email templates.

Bringing it back to our example app. We may want to send an email to customers welcoming them to our service after they sign up. The MJML for the email looks as follows:

```xml
<!-- welcome-email.mjml -->
<mjml>
  <mj-head>
    <mj-title>Welcome to example.com</mj-title>
    <mj-preview>You have started your one month free trial</mj-preview>
  </mj-head>
  <mj-body>
    <mj-include path="../components/header.mjml" />
    <mj-section>
      <mj-column padding-top="20px">
        <mj-text font-size="14px">
          <h2>Hello, welcome to example.com.</h2>
          <p>
            We hope you enjoy your free trial of our service. Be sure to check
            out our premium features. You will be notified when your trial is
            expiring and automatically downgraded to our free tier. But, you can
            upgrade at anytime.
          </p>
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-include path="../components/benefits.mjml" />
    <mj-include path="../components/footer.mjml" />
  </mj-body>
</mjml>
```

Here we have a simple welcome email that includes a heading and some welcome text. We import common header component with our company logo, a component that lists our company's benefits and a simple footer with some links to our website.

## Compiling MJML

Now we must compile our MJML to HTML. MJML has a command line tool which can do this, but I have opted to use the gulp.js plugin. Gulp is a javascript framework for creating automated build processes. By utilizing gulp we can have a slightly more sophisticated build process and do things like inject common constant values and even have a live dev-server to make our MJML development experience nicer. Here is a sample gulpfile for an MJML project:

```js
const gulp = require('gulp');
const mjml = require('gulp-mjml');
const mjmlEngine = require('mjml');

const constants = {
	WEBSITE_URL: 'http://example.com',
	EMAIL: 'help@example.com'
};

/**
 * Replace template variables e.g. {{VALUE}}
 * with the corresponding value from the constants object
 */
function templateVariables() {
	return replace(/\{\{(.*?)\}\}/g, (_, p1) => {
		const value = constants[p1];
		if (!value) {
			throw new Error('unknown constant');
		}
		return value;
	});
}

function html() {
	return gulp
		.src(['./emails'])
		.pipe(mjml(mjmlEngine, { validationLevel: 'strict' }))
		.pipe(templateVariables())
		.pipe(gulp.dest('./build'));
}

exports.default = html;
```

Our single html function takes our MJML templates in the emails directory, generates HTML using the mjml engine and then replaces constants with This is a fairly simplified example, for a more complete example with a live dev server see the [project source code](https://github.com/harris-jacob/toy-mailer/blob/main/packages/templates/gulpfile.js). Now we can output Email client friendly HTML.

## Runtime Template Variables
