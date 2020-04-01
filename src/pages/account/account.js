import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "../../components/custom-button/custom-button";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";

import "./account.scss";

const AccountPage = ({ currentUser }) => (
    <div className="account">
        <h1>{currentUser ? currentUser.displayName : "User Account Page"}</h1>

        <div>
            {currentUser ? (
                <>
                    <p>You are logged in as:</p>
                    <ul>
                        <li>
                            <strong>Username:</strong> {currentUser.displayName}
                        </li>
                        <li>
                            <strong>Email:</strong> {currentUser.email}
                        </li>
                    </ul>
                    <p>
                        For assistance with your account, please email
                        contact@codeselfstudy.com.
                    </p>
                    <CustomButton onClick={() => auth.signOut()}>
                        Sign Out
                    </CustomButton>
                </>
            ) : (
                <p>
                    <Link to="/auth">Click here</Link> to sign in.
                </p>
            )}
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AccountPage);
