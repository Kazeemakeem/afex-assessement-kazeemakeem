import React from 'react';
// import tw, { styled } from 'twin.macro';

interface TableProps {
  title: string;
  headers: string[];
  rows: string[][];
  type: String;
}

export const  Table: React.FC<TableProps> = ({ title, headers, rows, type}) => {

  return (
    <div className="flex flex-col border border-1 border-gray-100 shadow rounded-2xl pb-0 pt-4">
       
       <h2 className="text-2xl font-bold mb-4 mx-8">{title}</h2>

      <div className="flex flex-row text-sm font-semibold mb-2 px-4 py-2 text-gray-800 rounded shadow">
        {headers.map((header, index) => (
          <div key={index} className={`px-4 text-${index === 0 || index === 1 ? "left" : "center"} w-full text-xl`}>{header}</div>))} 
      </div>

      {rows.map((row, index) => ( 
        <div className="flex flex-row text-sm font-semibold mb-2 px-4 py-2 text-gray-800 rounded shadow text-xl"
        key={index} > 
          {row.map((data, index) => (
            <div key={index} className={`${index === 0 || index === 1 ? "text-left" : "text-center"} px-4 w-full ${index === row.length - 2 || index === row.length - 1 ? `${index === row.length - 1 ? `${type === "buy" ? "bg-green-50" : `${type === "sell" ? "bg-red-50" : ""}`}` : ""} ${type === "buy" ? "text-green-500" : `${type === "sell" ? "text-red-500" : ""}`}` : ""}`}>{data}</div>)) 
        }  
        </div>))
      }
    </div>
  )
}