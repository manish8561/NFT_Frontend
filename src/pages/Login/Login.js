import React from 'react';
import './Login.scss';
import {Container, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import meta from '../../assets/Images/meta-mask.png';
import metaicon from '../../assets/Images/metamask-alternative.webp';
import bitski from '../../assets/Images/bitski.png'
import fortmatic from '../../assets/Images/formatic.png'
import walletconnect from '../../assets/Images/wallet.png'
import coinbase from '../../assets/Images/coin-base.png'
import arkane from '../../assets/Images/arkane.png'
import authereum from '../../assets/Images/autherum.png'
import dapper from '../../assets/Images/dapper.png'
import torus from '../../assets/Images/torus.png'
import portis from '../../assets/Images/portis.png'
import kaikas from '../../assets/Images/kaikas.png'

// import {useDispatch} from 'react-redux';
// import {saveWalletAddress} from '../../redux/action/persist.action';

const Login = () => {


    return (
        <Container className="signWallet">
            <h1>Sign in to your wallet.</h1>
            <img src={metaicon} width="150" /> <br />
            <Link className="light_btn" to="/">Sign In</Link>
            <Form className="select-wallet">
                <Form.Control as="select">
                    <option> Use a different wallet</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form>
            <ul>
                <li>
                    <div className="Walletimage"><img src={meta} /></div>
                    <div className="Walletcaption">
                        <h4>Metamask</h4>
                        <p>A browser extension with great flexibility. The web's most popular wallet</p></div>
                </li>
                <li>
                    <div className="Walletimage">
                        <img src={coinbase} />
                    </div>
                    <div className="Walletcaption">
                        <h4>Coinbase Wallet</h4>
                        <p>Pairs with Coinbase Wallet and works from any browser, without an extension</p></div>
                </li>
                <li>
                    <div className="Walletimage"><img src={bitski} /></div>


                    <div className="Walletcaption">
                        <h4>Bitski</h4>
                        <p>A simple-to-use wallet that allows you to sign in with an email and password</p></div>
                </li>
                <li>
                    <div className="Walletimage"><img src={walletconnect} /></div>

                    <div className="Walletcaption">
                        <h4>Wallet Connect</h4>
                        <p>Pair with Trust, Argent, MetaMask  &amp; more. Works from any browser, without an extension</p></div>
                </li>
                <li>
                    <div className="Walletimage"><img src={fortmatic} /></div>

                    <div className="Walletcaption">
                        <h4>Fortmatic</h4>
                        <p>A user-friendly wallet that allows you to sign up with your phone number on any device</p></div>
                </li>


                <li>
                    <div className="Walletimage"><img src={arkane} /></div>
                    <div className="Walletcaption">
                        <h4>Arkane Network</h4>
                        <p>A security-focused cloud wallet with pin codes and multi-factor auth</p></div>
                </li>
                <li>
                    <div className="Walletimage"><img src={dapper} /></div>
                    <div className="Walletcaption">
                        <h4>Dapper</h4>
                        <p>A browser extension that pays gas fees for you, with the easiest setup</p></div>
                </li>
                <li>
                    <div className="Walletimage"><img src={authereum} /></div>
                    <div className="Walletcaption">
                        <h4>Authereum</h4>
                        <p>A usability-focused wallet with no transaction fees and a fiat on-ramp</p></div>
                </li>
                <li>
                    <div className="Walletimage"><img src={torus} /></div>
                    <div className="Walletcaption">
                        <h4>Torus</h4>
                        <p>Log in with Google, Facebook, or other OAuth providers</p></div>
                </li>
                <li>
                    <div className="Walletimage"><img src={portis} /></div>
                    <div className="Walletcaption">
                        <h4>portis.io</h4>
                        <p>A cloud-hosted wallet accessible from any device with built-in fiat support</p></div>
                </li>
                <li>
                    <div className="Walletimage"><img src={kaikas} /></div>
                    <div className="Walletcaption">
                        <h4>kaikas</h4>
                        <p>A browser extension for the Klaytn blockchain</p></div>
                </li>
            </ul>
        </Container>
    );
}

export default Login
