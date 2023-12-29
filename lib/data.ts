import React from "react"
import project1 from "@/public/images/project1.png";
import project2 from "@/public/images/project2.png";
import project3 from "@/public/images/project3.png";
import { CgWorkAlt } from "react-icons/cg";
import { MdWorkOutline } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
        title: 'Home',
        hash: '#home',
    },
    {
        title: 'About',
        hash: '#about',
    },
    {
        title: 'Projects',
        hash: '#projects',
    },
    {
        title: 'Skills',
        hash: '#skills',
    },
    {
        title: 'Experience',
        hash: '#experience',
    },
    {
        title: 'Contact',
        hash: '#contact',
    },
] as const;

export const experiencesData = [
    {
        title: 'Software Engineer',
        company: 'Google',
        location: 'Miami, FL',
        date: '2019 - Present',
        icon: React.createElement(LuGraduationCap),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'Software Engineer',
        company: 'Facebook',
        location: 'Orlando, FL',
        date: '2017 - 2019',
        icon: React.createElement(MdWorkOutline),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'Software Engineer',
        company: 'Microsoft',
        location: 'Miami, FL',
        date: '2015 - 2017',
        icon: React.createElement(MdWorkOutline),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'Software Engineer',
        company: 'Apple',
        location: 'Orlando, FL',
        date: '2013 - 2015',
        icon: React.createElement(MdWorkOutline),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
] as const;

export const projectsData = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        skills: ['React', 'Next.js', 'Tailwind CSS'],
        imagePath: '/project1.png',
        alt: 'Project 1',
        position: 1
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        skills: ['React', 'Next.js', 'Tailwind CSS'],
        imagePath: '/project2.png',
        alt: 'Project 2',
        position: 0
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        skills: ['React', 'Next.js', 'Tailwind CSS'],
        imagePath: '/project3.png',
        alt: 'Project 3',
        position: 1
    },
] as const;

export const skillsData = [
    {
        title: 'React',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'Next.js',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'Tailwind CSS',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'MySQL',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'Docker',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'JavaScript',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    ,
    {
        title: 'CSS',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'JQuery',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'HTML',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'PHP',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    ,
    {
        title: 'SQLite3',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'Android Studio',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    ,
    {
        title: 'Apache2',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'Nginx',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'Docker-Compose',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },
    {
        title: 'MongoDB',
        icon: React.createElement(FaReact),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
    },

] as const;