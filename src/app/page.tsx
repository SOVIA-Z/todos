"use client"

import React from 'react';

import { Authenticated, AuthLoading, Unauthenticated, useQuery } from "convex/react";
import  { api }  from '../../convex/_generated/api';
import { Id } from "../../convex/_generated/dataModel"
import { NewToDoForm } from "./_components/new-todo-form";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { ToDoList } from "./_components/to-do-list";
import { GenerateTodosForm } from "./_components/generate-todos-form";



export default function Home() {
  
  return (
    <div className="max-w-screenmd mx-auto p-4 space-y-4">
      <Authenticated>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">TO-Do List</h1>
          <UserButton/>
        </div>
        <ToDoList/>
        <GenerateTodosForm/>
        <NewToDoForm/>
      </Authenticated>
      <Unauthenticated>
        <p className="text-gray-600">Please sign in to continue...</p>
        <SignInButton>
          <button className="p-1 bg-blue-500 text-white rounded">Sign In</button>

        </SignInButton>
      </Unauthenticated>
      <AuthLoading>
        <p>Loading...</p>
      </AuthLoading>
    </div>

  );
}
