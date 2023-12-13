import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises,
  equipmentName,
}) => {
  return (
    <Box sx={{ mt: { lg: "10px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mb="33px" mt={5}>
        More{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {equipmentName}
        </span>{" "}
        Exercises
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
