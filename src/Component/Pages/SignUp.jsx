import { toast } from 'react-toastify';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { signUp } from '../Utils/api';
import Spinner from '../Common/Spinner';

class Sign extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      navigation: false,
      loading: false,
    };
  }

  handleClick = async () => {
    this.setState({ loading: true });
    try {
      const response = await signUp(this.state);
      if (response.status === 200 || response.status === 201) {
        toast.success('Your Account Has been Created', {
          position: "top-right",
          autoClose: 5000,
        });
        // Set loading to false and navigation to true
        this.setState({ loading: false, navigation: true });
      } else {
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
      toast.error('An error occurred while creating your account.');
    }
  };


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    if (this.state.navigation) {
      return <Navigate to="/Login" />;
    }

    return (
      <section className="">
        <div className="flex items-center justify-center w-full h-screen">
          <div className="flex w-1/2 items-center justify-center px-16 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto w-full xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign up
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Login
                </Link>
              </p>
              <form action="#" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Enter Your Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        placeholder="Enter Your Full Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Enter Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Enter Your Email Address"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        Password
                      </label>
                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={this.handleClick}
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Get started{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="h-full w-1/2">
            <img
              className="mx-auto h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Sign;
