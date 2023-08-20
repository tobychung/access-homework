/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */
import React from "react";

// ** MUI Imports
import { Box, Chip, Container, Link, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { usePageEffect } from "../../core/page";
import usersResult from "./usersResult.json";

export default function Home(): JSX.Element {
  usePageEffect({ title: "React App" });
  const [checked, setChecked] = React.useState([1]);

  const userEdges: UserEdge[] = usersResult.data.search.edges;

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container sx={{ py: "20vh" }} maxWidth="sm">
      <Typography sx={{ mb: 2 }} variant="h1" align="center">
        Access Homework DEMO
      </Typography>

      <List
        dense
        sx={{
          width: "100%",
          maxWidth: 360,
          mx: "auto",
        }}
      >
        {userEdges.map(({ node }) => {
          const labelId = `checkbox-list-secondary-label-${node.id}`;
          return (
            <ListItem
              key={node.id}
              sx={{
                my: 1,
                px: 2,
                py: 1,
                boxShadow: 2,
                bgcolor: "background.paper",
              }}
            >
              <Stack
                width="100%"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <ListItemAvatar>
                    <Avatar
                      alt={node.name}
                      src={node.avatarUrl}
                      sx={{ width: 48, height: 48, boxShadow: 2 }}
                    />
                  </ListItemAvatar>
                  <Stack direction="column" sx={{ pl: 1 }}>
                    <Typography sx={{ fontSize: 12 }}>{node.login}</Typography>
                    <Stack direction="row">
                      <Chip
                        label={node.isSiteAdmin ? "ADMIN" : "STAFF"}
                        color="primary"
                        size="small"
                        sx={{ fontWeight: "bold" }}
                      />
                    </Stack>
                  </Stack>
                </Stack>
                <Box>
                  <Link href={`/users/${node.id}`}>Detail</Link>
                </Box>
              </Stack>
            </ListItem>
          );
        })}
      </List>

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gridGap: "1rem",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          href={`/api`}
          children="Explorer API"
          startIcon={<Api />}
        />
        <Button
          variant="outlined"
          size="large"
          href="https://github.com/kriasoft/react-starter-kit"
          children="View on GitHub"
          startIcon={<GitHub />}
        />
      </Box> */}
    </Container>
  );
}
