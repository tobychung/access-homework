import React from "react";

// ** MUI Imports
import { Box, Chip, Container, Link, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { graphql, useLazyLoadQuery } from "react-relay";

// ** Local Imports
import { usePageEffect } from "../../core/page";
import usersResult from "./usersResult.json";

const query = graphql`
  query DashboardUsersQuery($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      userCount
      edges {
        node {
          ... on User {
            id
            name
            avatarUrl
            login
            isSiteAdmin
            repositories {
              totalCount
            }
          }
        }
      }
    }
  }
`;
export type SearchType =
  | "DISCUSSION"
  | "ISSUE"
  | "REPOSITORY"
  | "USER"
  | "%future added value";

const variables = {
  query: "location:taiwan language:Javascript",
  type: "USER",
  first: 100,
};

const Home = () => {
  usePageEffect({ title: "React App" });
  const [checked, setChecked] = React.useState([1]);

  const data = useLazyLoadQuery(query, variables, {
    fetchPolicy: "store-or-network",
  });

  const userEdges: UserEdge[] = usersResult.data.search.edges;

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
    </Container>
  );
};
export default Home;
