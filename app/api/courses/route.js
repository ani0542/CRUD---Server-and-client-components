import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';

export async function GET(request) {
    return NextResponse.json(courses); //The NextResponse.json() method seems to be used to send a JSON response back to the client.
}

export async function POST(request) {
    const { title, description, level, link } = await request.json();

    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link,
    }; 

    courses.push(newCourse);
    // return NextResponse.json({message:'course created'});   //to test from postman
    return NextResponse.json(courses);
}