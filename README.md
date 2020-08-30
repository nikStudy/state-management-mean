<h1>State Management in MEAN Stack</h1>
<p>Note: State management is only required when the loading from backend takes more than 5 seconds, otherwise there is no need of state management. Most of the times, we do not need state management in most web applications. It adds unnecessary complications to the web application.</p>
<p>This is a web application example employing the state management functionality with the following features: </p>
<p><b>Key state management features</b></p>
<ul>
    <li>State Management using Behaviour Subject, Observable RxJS</li>
    <li>Central products store created to avoid recurring API calls to backend whenever user leaves/enters the products page</li>
    <li>Central cart store created to avoid recurring API calls to backend whenever user leaves/enters the shopping cart page</li>
</ul>

<p>Shopping cart features</p>
<ul>
    <li>Dynamic products content from database</li>
    <li>Shopping cart functionality</li>
    <li>Stripe payment integration</li>
    <li>Products order confirmation email</li>
    <li>Protection provided against CSRF attacks</li>
</ul>

<p>Other authentication features</p>
<p style="text-align: justify;">Front end form controls validation, front end regex pattern match, password confirmation, sending email verification, registration confirmation email, frontend route guards, backend user schema validation, password hashing encryption, jwt send/receive, http interceptor, backend route restrictions, backend regex pattern match, google captcha implementation, password reveal eye, forgot password/username functionality with email, role based authorization for admin, OAuth login using Google, pop-out modal for logout, pop-out modal for session expire warnings.</p>
    
<h1>Front-End</h1>
<ul>
    <li>The code is divided into different modules and components / services / guards for better scalability and readability.</li>
    <li>Modules created - Root Module, ProductsModule, AdminModule, AuthModule, StaticPagesModule</li>
    <li>Common ProductsStore, CartStore created with accessibility to all the modules and components</li>
    <li>Root Module components - AppComponent, HeaderComponent</li>
    <li>ProductsModule components / services / guards - ProductsListComponent, ShoppingCartComponent, CheckoutComponent, ProductsService, LoggedGuard</li>
    <li>AdminModule components / services - ManagementComponent, EditUserComponent, ManagementService, PermissionGuard, AuthInterceptor</li>
    <li>AuthModule components / services - RegistrationComponent, LoginComponent, DashboardComponent, SocialComponent, ActivationComponent, ResendActivationLinkComponent, SocialErrorComponent, ForgotUsernameComponent, ForgotPasswordComponent, NewPasswordComponent, CheckSessionComponent, UserService, LoggedGuard, NotLoggedGuard, AuthInterceptor, RecaptchaSettings, HttpClientXsrfModule</li>
    <li>StaticPagesModule components - AboutUsComponent</li>
</ul>

<h1>Back-End</h1>
<ul>
    <li>Models created in MongoDB database - User model, Product model, Cart Model, Order model</li>
    <li>User model is created to store all the user registration / permission details</li>
    <li>Product model is created to store all the product information details</li>
    <li>Cart model is created to store the active shopping cart details</li>
    <li>Order model is created to store the paid order details (e.g. user, cart, name, address, paymentId, etc.) </li>
    <li>Lots of REST APIs created using these models for various CRUD operations</li>
    <li>csurf library is used to create Node.js CSRF protection middleware to protect against CSRF (Cross-side request forgery) attacks</li>
    <li>Multer NodeJS middleware used for uploading product image files. Only jpeg/png files are allowed. Max file size of 5 MB is allowed</li>
    <li>PassportJS 'passport-google-oauth20' strategy used for social login via Google</li>
    <li>PassportJS 'passport-github' strategy used for social login via Github</li>
    <li>Nodemailer, Mailgun used for sending emails to user for order placement, registration verification/confirmation, forgot username/password</li>
    <li>bcrypt library used for password hashing / encryption</li>
    <li>mongoose-title-case plugin used for converting user names to title case</li>
    <li>jsonwebtoken library used for issuing/verifying login authentication tokens</li>
    <li>Google Recaptcha key used in the backend for captcha confirmation</li>
</ul>

<h1>Technologies Used</h1>
<ul>
    <li>Angular</li>
    <li>NodeJS</li>
    <li>ExpressJS</li>
    <li>MongoDB</li>
    <li>Bootstrap</li>
    <li>jQuery</li>
</ul>

<h1>Screenshots</h1>
<h4>Screen recording before implementing state management. Keep an eye on the products/ and shopping-cart/ API calls in the developer tools. We can see that there is a API call everytime user enters/leaves the products page and shopping cart page.</h4>
<video  src="./images/Screen Recording 2020-08-30 at 4.40.54 AM.mov"
        autoplay
        loop
        controls
        
>Video1</video>

<h4>Screen recording after implementing state management. Keep an eye on the products/ and shopping-cart/ API calls in the developer tools. We can see that there is no recurring API calls as the user enters/leaves the products page and shopping cart page.</h4>
<video  src="./images/Screen Recording 2020-08-30 at 4.20.42 AM.mov"
        autoplay
        loop
        controls
        
>Video2</video>
