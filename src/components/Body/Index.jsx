import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Body = () => {
  return (
    <div class="container mx-auto flex flex-wrap py-2 conetendor-grande">
      <div class="row">
        <div class="col-8 columna1 shadow border">
          <a href="#">
            <img
              className="imagenPC"
              src="https://img.freepik.com/free-vector/open-source-illustration-tiny-programming-language-persons-concept-developer-protocol-platform-interface-with-code-information-digital-software-script-text-signs-computer-data_126608-891.jpg?w=2000"
            ></img>
            <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">
              Technology
            </a>
            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
              Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
            </a>
            <p href="#" class="text-sm pb-3">
              By{" "}
              <a href="#" class="font-semibold hover:text-gray-800">
                Ivan Rodriguez
              </a>
              , Published on April 25th, 2020
            </p>
            <a href="#" class="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
              iaculis dui porta volutpat. In sit amet posuere magna..
            </a>
            <a href="#" class="uppercase text-gray-800 hover:text-black">
              Continue Reading <i class="fas fa-arrow-right"></i>
            </a>
          </a>
        </div>
        <div class="col-3 ml-3 columna2 shadow border">
          <p class="text-xl font-semibold pb-5">About Us</p>
          <p class="pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In
            hac habitasse platea dictumst.
          </p>
          <a
            href="#"
            class="w-full text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
          >
            Get to know us
          </a>
          <div class="">
            <p class="text-xl font-semibold pt-5">Related topics</p>
            {/* <div class="row"> */}
            <div class="grid grid-cols-3">
              <img
                class="hover:opacity-75"
                src="https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              ></img>
              <img
                class="hover:opacity-75"
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              ></img>
              <img
                class="hover:opacity-75"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              ></img>
              <img
                class="hover:opacity-75"
                src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              ></img>
              <img
                class="hover:opacity-75"
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              ></img>
              <img
                class="hover:opacity-75"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              ></img>
              <img
                class="hover:opacity-75"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              ></img>
              <img
                class="hover:opacity-75"
                src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              ></img>
              <img
                class="hover:opacity-75"
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
              ></img>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
