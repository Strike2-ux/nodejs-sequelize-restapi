import {Project} from '../models/Project.js';

export const getProjects = async (req, res) => {

};

export const getProject = async (req, res) => {
    try {  
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id,
            },
        });

        if (!project)
            return res.status(404).json({ message: "Project does not exits" });
            
        res.json(project);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
};

export const createProject = async (req, res) => {

};

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const {name, priority, description} = req.body
    res.send('updating project')

    const project = await Project.findByPk(id)
    project.name = name
    project.priority = priority
    project.description = description
    await project.save()

    res.send('updating')

};

export const deleteProject = async (req, res) => {
try {
    const { id } = req.params
    
    await Project.destroy({
        where: {
            id,
        },
    });

    res.sendStatus(204)
} catch (error) {
    return res.status(500).json({ message: error.message });
}

};