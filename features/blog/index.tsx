import axios from "axios";
import React, { useEffect } from "react";

const Blog = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [blogDetail, setBlogDetail] = React.useState<any>(null);
  useEffect(() => {
    // Send a POST request
    const init = async () => {
      const res = await axios({
        method: "get",
        url: "https://prod-ap-southeast-2-2.clickup.com/task-v3/experience/tasks/86cwcheak?fields%5B%5D=core&fields%5B%5D=custom_fields&fields%5B%5D=points_estimate&fields%5B%5D=time_estimate&fields%5B%5D=time_tracking&fields%5B%5D=comment_mentions&fields%5B%5D=comment_attachments&fields%5B%5D=editor_token&fields%5B%5D=permissions&fields%5B%5D=statuses&fields%5B%5D=links&fields%5B%5D=features&fields%5B%5D=subtasks_count&fields%5B%5D=space_id&fields%5B%5D=folder_id&fields%5B%5D=comment_count&fields%5B%5D=commit_counts&fields%5B%5D=direct_parent&fields%5B%5D=users&fields%5B%5D=goals&fields%5B%5D=custom_type&fields%5B%5D=groups&fields%5B%5D=nested_level",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNiVkFxWkNGdVJBPSJ9.eyJ1c2VyIjo0OTc1MDY2NSwidmFsaWRhdGVkIjp0cnVlLCJ3c19rZXkiOiJkanJlM3l0cmsiLCJzZXNzaW9uX3Rva2VuIjp0cnVlLCJpYXQiOjE3MjYzNzIxMDMsImV4cCI6MTcyNjU0NDkwM30.2vT-vTh7WSjjM-VK-cWGe8q8y7BYTIz5jAcjhQJ3aaY",
        },
      });

      setBlogDetail(res.data);
    };
    init();
  }, []);

  if (!blogDetail) {
    return <div>No blog</div>;
  }

  return (
    <div>
      <div>Blog</div>
      <div>Name{blogDetail.task.name}</div>
      <div>Content: {blogDetail.task.content}</div>
    </div>
  );
};

export default Blog;
