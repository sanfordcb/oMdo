jest.unmock('../app/components/navbar.js');

describe('Navbar', function() {
  var React = require('react');
  var ReactDom = require('react-dom');
  var TestUtils = require('react-addons-test-utils');
  var styleable = require('react-styleable');
  var navCss = require('../app/styles/navbar.css');

  var Navbar;
  beforeEach(function() {
    Navbar = require('../app/components/navbar');
  });

  it('should exist', function() {
    var navbar = TestUtils.renderIntoDocument(<Navbar />);
    expect(TestUtils.isCompositeComponent(navbar)).toBeTruthy();
  });
});
