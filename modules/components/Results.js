import React from 'react'
import { GridList, GridTile, IconButton, Subheader } from 'material-ui'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import { spaceWrap, gridList } from '../styles.css'
import { paginated } from '/Home.js'


class Form extends GridListExampleSimple {
  render() {
    <div className={spaceWrap}>
      <GridList
        cellHeight={200}
        className={gridList}
      >
        <Subheader>December</Subheader>
        {tilesData.map((tile) => (
          <GridTile
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            {paginated}
          </GridTile>
        ))}
      </GridList>
    </div>
  }
}

