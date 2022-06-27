import styled from "styled-components";
import {Tab, TabList, Tabs, TabPanel } from "react-tabs";

export const STabs = styled(Tabs)`
    font-size: 14px;
    font-family: sans-serif; 
`;

export const STabList = styled(TabList)`
    list-style-type: none;
    padding: 5px;
    display: flex;
    margin: 0;
`;

export const STab = styled(Tab)`
    padding: 10px;
    cursor: pointer;
    border: 1px solid gray;
    margin-right: 3px;
    color: gray;
    border-radius: 16px;

    &:focus {
        outline: none;
    }

    &.is-selected {
        background-color: gray;
        color: #fff;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const STabPanel = styled(TabPanel)`
    display:none;
    min-height: 40vh;
    padding: 8px;

    &.is-selected{
        display:flex;
    }
`;