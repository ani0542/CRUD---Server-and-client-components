"use client";
// import Link from 'next/link'
import React,{ useState, useEffect } from 'react';
import Courses from './components/Courses'
import LoadingPage from './loading';
import CourseSearch from './components/CourseSearch';

const Home = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Welcome To Traversy Media</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
      {/* <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about/team'>Team</Link></li>
      </ul> */}
    </div>
  )
}

export default Home