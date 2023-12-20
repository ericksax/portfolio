import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { api } from "../services/api";

interface Repository {
  repo: string;
  description: string;
  link: string;
  image: string;
  owner: string;
  language: string;
}

export const usePageData = () => {
  const [pagination, setPagination] = useState([] as number[]);
  const [newArray, setNewArray] = useState<Repository[] | undefined>([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const limit = 2;

  const { data, isFetching, isLoading, isError } = useQuery<Repository[]>(
    "pinnedRepos",
    async () => {
      const { data } = await api("ericksax");
      const limit = 2;
      const Pages = Math.ceil(data.length / limit);
      const arrayPages = [];

      for (let i = 1; i <= Pages; i++) {
        arrayPages.push(i);
      }
      setPagination([...arrayPages]);

      return data;
    }
  );

  useEffect(() => {
    const pageStart = Number(CurrentPage - 1) * limit;
    const pageEnd = pageStart + limit;
    const newarray = data?.slice(pageStart, pageEnd);

    setNewArray(newarray);
  }, [data, CurrentPage]);

  return {
    CurrentPage,
    newArray,
    pagination,
    setCurrentPage,
    isFetching,
    isLoading,
    isError,
  };
};
