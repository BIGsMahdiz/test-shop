import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import styles from "@/styles/SearchResult.module.css";
import extractImageLink from "@/utils/extractImageLink";

function SearchResult({ data }) {
  return (
    <div className={styles.searchResult}>
      <Box component="div">
        <List>
          {data?.data.map((item) => (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar>
                  <img
                    src={item.images[0] || extractImageLink(item.images[0])}
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={`Category: ${item.category.name}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default SearchResult;
