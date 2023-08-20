// ** React Imports
import { find, propEq } from "ramda";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// ** MUI Imports
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// ** Local Imports
import Button from "@mui/material/Button";
import DialogEditUserInfo from "../../components/DialogEditUserInfo";
import { usePageEffect } from "../../core/page";
import usersResult from "./usersResult.json";

const UserDetail: React.FC<{}> = (props) => {
  let params = useParams();
  const userId = params.id as string;

  usePageEffect({ title: "React App" });

  const navigate = useNavigate();
  const [checked, setChecked] = React.useState([1]);
  const userNodes = usersResult.data.search.edges.map(({ node }) => node);
  const node: UserNode = find(propEq<string>(userId, "id"), userNodes);

  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState(node.name || "Untitled");

  const handleSaveClick = (newName: string) => {
    setName(newName);
    setShow(false);
  };

  const handleBackClick = () => {
    navigate("/dashboard");
  };

  if (!node) {
    return (
      <Container sx={{ py: "20vh" }} maxWidth="sm">
        <Typography sx={{ mb: 2 }} variant="h1" align="center">
          No data
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: "20vh" }} maxWidth="sm">
      <Typography sx={{ mb: 2 }} variant="h1" align="center">
        Access Homework DEMO
      </Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Avatar
              alt={node.name}
              src={node.avatarUrl}
              sx={{ width: 82, height: 82, boxShadow: 2, mx: "auto", mb: 1 }}
            />
            <Typography
              sx={{ mx: "auto", mb: 1, fontSize: 16 }}
              color="text.secondary"
              textAlign="center"
            >
              {name}
            </Typography>

            <Typography
              variant="h5"
              component="div"
              textAlign="center"
              sx={{ mb: 2 }}
            >
              {node.bio}
            </Typography>
          </Box>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <Stack>
                <ListItemText
                  id="switch-list-label-wifi"
                  primary={node.login}
                />
                <Chip
                  label={node.isSiteAdmin ? "ADMIN" : "STAFF"}
                  color="primary"
                  size="small"
                  sx={{ fontWeight: "bold" }}
                />
              </Stack>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary={node.location}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InsertLinkIcon />
              </ListItemIcon>
              <Box>
                {!!node.websiteUrl ? (
                  <Link target="_blank" rel="noopener" href={node.websiteUrl}>
                    {node.websiteUrl}
                  </Link>
                ) : (
                  <Typography sx={{ fontSize: 14 }}>No Link</Typography>
                )}
              </Box>
            </ListItem>
          </List>
        </CardContent>
        <Divider />
        <CardActions>
          <Box display="flex" justifyContent="end" width="100%">
            <Button variant="outlined" sx={{ mr: 1 }} onClick={handleBackClick}>
              Back
            </Button>
            {/* NOTE: Editing Dialog */}
            <DialogEditUserInfo
              show={show}
              name={name}
              setShow={setShow}
              onSave={handleSaveClick}
            />
          </Box>
        </CardActions>
      </Card>
    </Container>
  );
};

export default UserDetail;
