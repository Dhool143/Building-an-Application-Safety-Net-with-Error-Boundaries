# React Error Boundary Lab

## Description

This project demonstrates the use of React Error Boundaries to prevent a single component crash from causing the entire application to fail.

## Features

- Error Boundary using Class Component
- getDerivedStateFromError()
- componentDidCatch()
- Fallback UI
- Dashboard remains functional during widget crashes

## Installation

npm install

## Run

npm run dev

## Test Cases

### Normal Cases

1. Weather widget loads correctly.
2. Dashboard displays data.
3. Error Boundary wraps components successfully.

### Edge Cases

1. Weather widget throws an error.
2. Corrupted data causes crash.
3. One widget crashes while others continue functioning.