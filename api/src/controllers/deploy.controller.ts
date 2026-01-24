import type { Context } from "hono";

export const createNewDeployment = async (c: Context) => {
  try {
    const { github, app } = await c.req.json();

    // 1. check if the github repo has a Dockerfile
    // 2. clone the github repo
    // 3. build the docker image
    // 4. push to the repo
    // 5. generate yaml
    // 6. deploy using traefik
    // 7. return url

    return c.json({
      success: true,
      github,
      app,
    });
  } catch (err: any) {
    return c.json(
      {
        success: false,
        reason: err.message,
      },
      500,
    );
  }
};
