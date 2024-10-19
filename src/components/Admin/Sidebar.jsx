import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddLine, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location=useLocation();
    return (
        <VStack spacing={'8'} p={'16'} boxShadow={'-3px 0 10px rgba(107,70,193,0.5)'}>
            <LinkButton url={"dashboard"} Icon={RiDashboardFill} text={'Dashboard'} active={location.pathname==='/admin/dashboard'} />
            <LinkButton url={"addlabfile"} Icon={RiAddLine} text={'Add Labfile'} active={location.pathname==='/admin/addlabfile'} />
            <LinkButton url={"addpapers"} Icon={RiAddLine} text={'Add Papers'} active={location.pathname==='/admin/addpapers'} />
            <LinkButton url={"viewlabfiles"} Icon={RiEyeFill} text={'ViewLabfiles'} active={location.pathname==='/admin/viewlabfiles'} />
            <LinkButton url={"viewpapers"} Icon={RiEyeFill} text={'ViewPapers'} active={location.pathname==='/admin/viewpapers'} />
            <LinkButton url={"users"} Icon={RiUser3Fill} text={'Users'} active={location.pathname==='/admin/users'} />
           
           
        </VStack>
    )
}

export default Sidebar

function LinkButton({url,Icon,text,active}){
    return(
        <Link to={`/admin/${url}`}><Button colorScheme={active?"purple":''} fontSize={'larger'} variant={'ghost'}>
            <Icon style={{ margin: '8px' }} />
            {text}</Button></Link>

    )
}