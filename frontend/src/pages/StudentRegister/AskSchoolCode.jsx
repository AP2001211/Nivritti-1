import React from 'react';
import '../general/Homepage.css'
import { Card, CardContent, TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AskSchoolCode = ({ schoolCode }) => {
  return (
    <Card
      style={{ width: '800px', height: '400px', margin: 'auto', marginTop: '140px' }}
    >
      <CardContent>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              style={{ marginTop: '20px', marginRight: '16px' }}
              label="School code"
              value={schoolCode}
            />
            <NavLink to='/questions'>
            <button style={{marginTop:'20px'}} className="primary-button">Verify</button>
            </NavLink>
          </div>
          <div
            style={{
              width: '400px',
              marginLeft: 'auto',
              marginTop: '90px',
              justifyContent: 'left',
            }}
          >
            <button
              className="secondary-button"
              href="https://example.com/pdf1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: '8px' }}
            >
              NG FAQ Brochure
            </button>
            <button
              className="secondary-button"
              href="https://example.com/pdf2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: '8px' }}
            >
              NG Application PDF
            </button>
            <button
              className="secondary-button"
              href="https://example.com/pdf3.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo video-application form filling
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AskSchoolCode;
