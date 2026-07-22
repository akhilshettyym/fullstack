// Imports of Layout
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Imports of main
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Layout from './Layout'
import User from './components/User/User';
import Github from './components/Github/Github';
import { githubInfoLoader } from './components/Github/Github';

// Imports of Users
import { useParams } from 'react-router-dom'

// Imports of Home
import { Link, NavLink } from 'react-router-dom';
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";

// Imports of Header
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export {
    React, Header, Footer, Outlet,

    Home, About, Contact, Layout, StrictMode, createRoot,
    createBrowserRouter, RouterProvider, Route, User, Github, githubInfoLoader,

    useParams, Link, img1, img2, img3, NavLink, useLoaderData, useEffect, useState
}