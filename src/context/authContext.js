import React, { useContext, useState, useEffect } from "react";
import PaymentService from "../services/PaymentService";
import UserResearchService from "../services/UserResearchService";
import UserWorkshopService from "../services/UserWorkshopService";
import AuthService from "../services/AuthService";
import FileUploadService from "../services/FileUploadService";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUserFirstName, setCurrentUserFirstName] = useState("");
  const [currentUserLastName, setCurrentUserLastName] = useState("");
  const [currentUserType, setCurrentUserType] = useState("");
  const [currentUserID, setCurrentUserID] = useState("");
  const [currentUserName, setCurrentUserName] = useState("");

  // user related function service calls
  function signIn(data) {
    return AuthService.userSignIn(data);
  }

  function signUp(data) {
    return AuthService.userSignUp(data);
  }

  function logout() {
    return AuthService.userLogout();
  }

  function getUserProfile(userId) {
    return AuthService.userProfile(userId);
  }

  function updateUser(data) {
    return AuthService.userUpdate(data);
  }

  function deleteUser(userId) {
    return AuthService.userDelete(userId);
  }

  // user research related function service calls

  function getResearch(userId) {
    return UserResearchService.getResearch(userId);
  }

  function getResearchById(researchId) {
    return UserResearchService.getResearchById(researchId);
  }

  function updateResearch(
    file,
    description,
    title,
    selectedTopics,
    selectedAuthors,
    user,
    onUploadProgress
  ) {
    return FileUploadService.researchUpdate(
      file,
      description,
      title,
      selectedTopics,
      selectedAuthors,
      user,
      onUploadProgress
    );
  }

  function deleteResearch(researchId) {
    return UserResearchService.deleteResearch(researchId);
  }

  function researchFileUpload(
    file,
    description,
    title,
    selectedTopics,
    selectedAuthors,
    user,
    onUploadProgress
  ) {
    return FileUploadService.researchUpload(
      file,
      description,
      title,
      selectedTopics,
      selectedAuthors,
      user,
      onUploadProgress
    );
  }

  // user workshop related function service calls

  function getworkshop(userId) {
    return UserWorkshopService.getWorkshop(userId);
  }

  function getWorkshopById(workshopId) {
    return UserWorkshopService.getWorkshopById(workshopId);
  }

  function updateWorkshop(
    file,
    description,
    title,
    persons,
    date,
    startTime,
    endTime,
    user,
    onUploadProgress
  ) {
    return FileUploadService.workshopUpdate(
      file,
      description,
      title,
      persons,
      date,
      startTime,
      endTime,
      user,
      onUploadProgress
    );
  }

  function deleteWorkshop(workshopId) {
    return UserWorkshopService.deleteWorkshop(workshopId);
  }

  function workshopFileUpload(
    file,
    description,
    title,
    persons,
    date,
    startTime,
    endTime,
    user,
    onUploadProgress
  ) {
    return FileUploadService.workshopUpload(
      file,
      description,
      title,
      persons,
      date,
      startTime,
      endTime,
      user,
      onUploadProgress
    );
  }

  // user payment related function service calls

  function createPayment(data) {
    return PaymentService.createPayment(data);
  }

  function getPayment(userId) {
    return PaymentService.getPayment(userId);
  }

  function getPaymentById(paymentId) {
    return PaymentService.getPaymentById(paymentId);
  }

  useEffect(async () => {
    setLoading(false);
    const user = AuthService.getCurrentUser();
    if (user != null) {
      setCurrentUserID(user.id);
      setCurrentUserType(user.type);
      setCurrentUserName(user.username);
    }
  }, []);

  const value = {
    signIn,
    signUp,
    logout,
    getUserProfile,
    updateUser,
    deleteUser,
    getResearch,
    getResearchById,
    updateResearch,
    deleteResearch,
    researchFileUpload,
    getworkshop,
    getWorkshopById,
    updateWorkshop,
    deleteWorkshop,
    workshopFileUpload,
    createPayment,
    getPayment,
    getPaymentById,
    currentUserName,
    currentUserFirstName,
    currentUserLastName,
    currentUserType,
    currentUserID,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
