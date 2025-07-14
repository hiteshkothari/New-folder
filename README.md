# ShoppingCartWeb

## Framework & Key Libraries

- **Angular**: 20.0.0
- **Angular CLI**: 20.0.3
- **RxJS**: 7.8.0
- **Cypress**: 14.5.1
- **Jasmine/Karma**: 5.7.0 / 6.4.0
- **Zone.js**: 0.15.1

## Local Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/hiteshkothari/New-folder
   cd New-folder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the application locally**

   ```bash
   ng serve
   ```

   Open your browser at [http://localhost:4200/](http://localhost:4200/)

4. **Run unit tests**

   ```bash
   ng test
   ```

5. **Run Cypress E2E tests**
   ```bash
   npm run cypress:open
   ```

## Live Application

You can view the live application at:

**[https://shoppingkacart.netlify.app/](https://shoppingkacart.netlify.app/)**

## Project Structure & Testing

- Unit tests are written using Jasmine/Karma (see `src/services/cart.service.spec.ts`, `src/services/product.service.spec.ts`, etc.)
- E2E tests are written using Cypress (see `cypress/e2e/`)

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
