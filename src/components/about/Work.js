import React from 'react';
import companyIcon from '../../assets/images/company.png';
import locationIcon from '../../assets/images/location.png';
import calendarIcon from '../../assets/images/calendar.png';

export default function Work({ jobTitle, companyName, location, employmentType, startDate, endDate }) {
    return (
        <div className="mb-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <div className="mb-2 md:mb-0">
                    {jobTitle && (
                        <h2 className="font-poppins text-sm md:text-md font-normal text-text-gray dark:text-[#A7A7A7] leading-tight tracking-wider">
                            {jobTitle}
                        </h2>
                    )}
                </div>
                {employmentType && (
                    <div className="bg-button-success text-text-gray dark:text-[#A7A7A7] text-xs font-poppins font-semibold leading-button px-4 py-2 rounded-full">
                        {employmentType}
                    </div>
                )}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-custom-gray mt-2">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-2 md:mb-0">
                    {companyName && (
                        <div className="flex items-center mb-2 md:mb-0 mr-0 md:mr-4">
                            <img src={companyIcon} alt="Company" className="w-5 h-5 mr-1" />
                            <span className="font-poppins text-xs md:text-sm leading-tight tracking-wider">{companyName}</span>
                        </div>
                    )}
                    {location && (
                        <div className="flex items-center mr-0 md:mr-4">
                            <img src={locationIcon} alt="Location" className="w-5 h-5 mr-1" />
                            <span className="font-poppins text-xs md:text-sm leading-tight tracking-wider">{location}</span>
                        </div>
                    )}
                </div>
                {(startDate || endDate) && (
                    <div className="flex items-center">
                        <img src={calendarIcon} alt="Calendar" className="w-5 h-5 mr-1" />
                        <span className="font-poppins text-xs md:text-sm leading-tight tracking-wider">{startDate} - {endDate}</span>
                    </div>
                )}
            </div>
            <div className="border-t border-[#666666] mt-4"></div>
        </div>
    );
}
