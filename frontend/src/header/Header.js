import {
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HikingIcon from "@mui/icons-material/Hiking";
import { useSelector } from "react-redux";

const pages = ["Home", "Diaries", "Auth"];
const LoggedInLinks = ["Home", "Diaries", "Add" , "Profile"];

function AppBarExample() {

  const isLoggedIn = useSelector( (state) => state.isLoggedIn );

  return (

    <div className="App">

<header className="p-4 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
      <HikingIcon/>
      <h1 className="text-xl font-medium pl-2" >TrekTracker</h1>
		</Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link to="/" className="btn btn-ghost flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
			</li>
			<li className="flex">
				<Link to="/diaries" className="btn btn-ghost flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Diaries</Link>
			</li>
			{ isLoggedIn && <li className="flex">
        <Link to="/add" className=" btn btn-ghost flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Share</Link>
			</li>}
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
      {
        isLoggedIn ?
        <><Link to='/profile'>
        <button className="btn btn-ghost self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
          Profile
        </button>
        </Link></>
          :
          <><Link to='/auth'>
      <button className="btn btn-ghost self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
        Sign In
      </button>
      </Link></>
      
      }

		</div>
	</div>
</header>
{/* 
      <Box sx={{ display: 'flex' }} >
        <AppBar position="static" component="nav" >
          <Toolbar >

              <HikingIcon />

              <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    ml: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  TrekTracker
              </Typography>

            <Box sx={{flexGrow: 1,  
                      display: { md: "flex", xs: "none", sm: "block" },
                      justifyContent: "flex-end", }}>
              { isLoggedIn ?  
                LoggedInLinks.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page === "Home" ? "" : page}`}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))
                : pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page === "Home" ? "" : page}`}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

          </Toolbar>
        </AppBar>
      </Box> */}



    </div>

  );
}

export default AppBarExample;
