# Stripe Payment Processing Frontend Integration

## Overview
This project is a frontend integration for Stripe payment processing, allowing users to securely make payments through a web application. It utilizes React for the frontend and integrates with Stripe's API to handle payment intents.

## Features
- **Secure Payment Processing**: Utilizes Stripe's API to handle payments securely.
- **Dynamic Payment Intent Creation**: Automatically creates payment intents upon page load.
- **Responsive Design**: Built with a responsive layout to ensure usability across devices.
- **Checkout Flow**: Provides a seamless checkout experience with a dedicated checkout form.
- **Completion Page**: Displays a confirmation page after successful payment.
- **Environment Configuration**: Uses environment variables to manage sensitive information like API keys.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Stripe.js**: A JavaScript library for integrating Stripe payments.
- **React Router**: For handling routing within the application.
- **CSS**: For styling the application.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/etanami/stripe-frontend.git
   cd stripe-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Stripe public key:
   ```plaintext
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key_here
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### API Integration
Go to `https://github.com/etanami/stripe-backend` to clone and setup the backend.
Ensure that your backend server is running and accessible at `http://localhost:4242`. This server should handle the payment intent creation.

## Usage
- Navigate to the `/checkout` route to initiate the payment process.
- Fill in the required payment details and submit the form.
- Upon successful payment, you will be redirected to the completion page.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Stripe](https://stripe.com) for providing a robust payment processing solution.
- [React](https://reactjs.org) for the powerful UI library.