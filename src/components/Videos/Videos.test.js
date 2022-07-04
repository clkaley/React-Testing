import React from "react";
import  renderer from "react-test-renderer";
import Videos from './Videos'


test('Videos Empty', ()=>{
    //dom-tree oluşturuyoruz.
    const tree=renderer.create(<Videos />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Videos 1 Items Correctly', ()=>{
    const tree=renderer.create(<Videos videos={['jest']}/>);
    expect(tree).toMatchSnapshot();
});



test('Videos All Items Correctly', ()=>{
    const tree=renderer.create(<Videos videos={["youtube","udemy","tutor"]}/>);
    expect(tree).toMatchSnapshot();
});