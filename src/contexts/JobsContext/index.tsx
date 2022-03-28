import React, { createContext, useCallback, useState, useEffect } from 'react';
import { IApiResponse, IJob, IJobsContext } from '../../models/models';
import api from '../../services/api';


export const JobsContext = createContext<IJobsContext>({} as IJobsContext);

export const JobProvider: React.FC = ({ children }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [selectedJob, setSelectedJob] = useState<IJob>({} as IJob);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getJobs = useCallback(async () => {
      setLoading(true);
      try { 
          const { data } : { data: IApiResponse[] } = await api.get('');
          setJobs(data);
          setSelectedJob(data[0]);
          setError(false);
          setLoading(false); 
      } catch (error) {
          setError(true);
          console.log('Error on API: ', error)
      }
  }, []);

  useEffect(() => {
      getJobs();
  }, []);

  return (
      <JobsContext.Provider
        value={{
            jobs,
            loading,
            selectedJob,
            setSelectedJob,
            getJobs,
            error,
        }}
      >
          {children}
      </JobsContext.Provider>
  )
}