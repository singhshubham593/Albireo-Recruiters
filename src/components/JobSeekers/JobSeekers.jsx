// src/components/JobSearchPage.jsx
import React, { useState } from "react";
import JobButton from "../../pages/JobButton.jsx";
import UnderDevelopment from "../../pages/UnderDevelopment.jsx";
import Jobs from "../../components/JobSeekers/jobs.jsx";
// import Jobsdata from "../../api/axios.js";
// import { useQuery } from "@tanstack/react-query";
// import fetchJobs from "../../api/axios.js";
// import { useSelector, useDispatch } from "react-redux";
// import setJobs from "../../features/JobSlice.js";
// import Button from "../../pages/Button.jsx";



const JobSeekers = () => {
  // const Jobdata = useSelector((s)=> s.jobs);
  // const dispatch= useDispatch();
  // const {
  //   data: jobs,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["jobs"],
  //   queryFn: fetchJobs,
  //   onSuccess: (data) => {
  //     dispatch(setJobs(data));
  //   }
  // });
  //   console.log("data1", jobs?.data);
  //   console.log("data3", jobs?.data.map((j) => j.locations));
  // // console.log("data2", Jobdata);
  
  // //  console.log("data3", jobs?.data.map((j) => j.locations));
  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Something went wrong</p>;

  //   jobs.data.map((j) => {
  //     console.log(j.job_id),
  //       // console.log("Api", j.title),
  //       // console.log("Api", j.employment_type),
  //       // console.log("Api", j.job_nature),
  //       // console.log("Api", j.functional_area),
  //       // console.log("Api", j.industry),
  //       //  console.log( j.shifts),
  //     console.log("Api",j.skills)
      
  //   })

//     jobs?.data.forEach(job => {
//   console.log(job.locations); // ['Bengaluru', 'Remote']
// });
  return (
    <>
    
        <Jobs /> 
      {/* <UnderDevelopment />   */}
    </>
  );
};

export default JobSeekers;
