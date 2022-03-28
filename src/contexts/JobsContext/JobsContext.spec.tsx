import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { JobProvider } from './index';
import { useJobs } from '../../hooks/usejobs';
import { waitFor } from '@testing-library/react';
import api from '../../services/api';
import MockAdapter from 'axios-mock-adapter';

const apiMocked = new MockAdapter(api);


describe('Get Jobs from API', () => {
    it('Should finish request with success', async () => {
      apiMocked.onGet('').reply(200, {
        data: {
          jobs: [],
        },
      });
  
      const { result } = renderHook(() => useJobs(), {
        wrapper: JobProvider,
      });
      waitFor(() => {
        result.current.getJobs();
        expect(result.current.jobs).toEqual([]);
      });
    });
  
    it('Should receive a error on request', async () => {
      apiMocked.onGet('').reply(500);
  
      const { result } = renderHook(() => useJobs(), {
        wrapper: JobProvider,
      });
      waitFor(() => {
        result.current.getJobs();
        expect(result.current.error).toBeInTheDocument();
      });
    });
  });